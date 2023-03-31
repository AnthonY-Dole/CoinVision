import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  TableContainer,
  Avatar,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";


type CustomTableProps = {
  variant?: "simple" | "striped" | "unstyled";
  children?: any;
  title: string[];
  data?: any;
};

export default function CustomTable({
  variant = "striped",
  children,
  title,
  data,
}: CustomTableProps) {
  const navigate = useNavigate();

  return (
      <TableContainer 
        mt={4} 
        mb={4} 
        boxShadow="xl" 
        borderRadius="2xl"
        >
        <Box mb={4}
        ></Box>
        <Table>
          <Thead>
            <Tr>
              {title.map((item: string, index: number) => (
                <Th key={index}>{item}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item: any, index: number) => (
              <Tr key={index} onClick={() => navigate(`/detail/${item.id}`)}>
                <Td fontWeight="bold" 
                display="flex" 
                alignItems="center"
                >
                  <Avatar src={item.icon} mr={2} />
                  {item.id}
                </Td>

                <Td>{Intl.NumberFormat("Eu").format(item.price.toFixed(2))}€</Td>
                <Td>{item.rank}</Td>
                <Td
                  style={{
                    color: item.priceChange1h > 0 ? "green" : "red",
                  }}
                >
                  {item.priceChange1h}
                </Td>
                <Td
                  style={{
                    color: item.priceChange1h > 0 ? "green" : "red",
                  }}
                >
                  {item.priceChange1d}
                </Td>
                <Td
                  style={{
                    color: item.priceChange1h > 0 ? "green" : "red",
                  }}
                >
                  {" "}
                  {item.priceChange1w}
                </Td>
                <Td>{Intl.NumberFormat("Eu").format(item.marketCap)}€</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
  );
}
