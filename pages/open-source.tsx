import * as React from 'react';
import { VStack, Text, useColorModeValue, HStack, IconButton, Tooltip } from '@chakra-ui/react';
import { PageSlideFade } from 'components/shared/animations/page-transitions';
import Header from 'components/shared/header';
import { RiWifiOffLine } from 'react-icons/ri';
import OfflineData from 'components/open-source/offline-data';
import { repositories } from 'data/repositories';
import PageLayout from 'components/layouts/pageLayout';

const TURQUOISE = '#06b6d4';

const iconProps = {
  variant: 'ghost',
  size: 'md',
  isRound: true
};

const RepositoriesList = ({ repositories }) => {
  const [activeTab] = React.useState('live');

  return (
    <PageLayout title="Open-source" keywords="A list of open source projects">
      <PageSlideFade>
        <VStack align="start" spacing={3}>
          <HStack justifyContent={'space-between'} width={'100%'}>
            <Header underlineColor={TURQUOISE} mt={0} mb={0}>
              Open Source
            </Header>
            <HStack>
              <Tooltip hasArrow label="Local github repos" placement="top">
                <IconButton
                  aria-label={'live'}
                  size="md"
                  colorScheme={'linkedin'}
                  icon={<RiWifiOffLine />}
                  isActive={activeTab === 'offline'}
                  {...iconProps}
                />
              </Tooltip>
            </HStack>
          </HStack>
          <Text color={useColorModeValue('gray.500', 'gray.200')} textAlign="left">
            This page lists some of the open source repositories I have published or contributed to.
          </Text>
        </VStack>

        <OfflineData repositories={repositories} />
      </PageSlideFade>
    </PageLayout>
  );
};

export function getStaticProps() {
  return {
    props: {
      repositories
    }
  };
}

export default RepositoriesList;
