import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
// import Chart from 'react-apexcharts';
import dynamic from 'next/dynamic'

import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const series = [
  { name: 'series1', data: [31,120,10,20, 50, 60, 120]}
]

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-08-01T00:00:00.000Z',
      '2022-08-02T00:00:00.000Z',
      '2022-08-03T00:00:00.000Z',
      '2022-08-04T00:00:00.000Z',
      '2022-08-05T00:00:00.000Z',
      '2022-08-06T00:00:00.000Z',
      '2022-08-07T00:00:00.000Z'
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <SideBar />

        <SimpleGrid flex='1' gap='4' minChildWidth="320px" alignItems='flex-start' >
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text>Inscritos da Semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text>Inscritos da Semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}   