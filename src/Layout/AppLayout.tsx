import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "@/Component/Nav";
type Props = {};


function AppLayout({}: Props) {
  return  <> <Nav/> < Outlet /> </> ;
}

export default AppLayout;
