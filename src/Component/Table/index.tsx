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
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "@chakra-ui/react";

import { useState } from "react";

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
    <TableContainer>
      <Box mb={4}></Box>
      <Table variant="striped" colorScheme="blue">
        <Thead>
          <Tr>
            {title.map((item: string, index: number) => (
              <Th key={index}>{item}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item: any, index: number) => (
            <Tr
              key={index}
              onClick={() =>
                navigate(`/detail/${item.id}`, { state: { data: item } })
              }
            >
              <Td>
                <Avatar src={item.icon} />
                {item.id}
              </Td>

              <Td>{item.price.toFixed(2)}€</Td>
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
              <Td>{item.marketCap}€</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
