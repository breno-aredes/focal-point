"use client";
import Header from "@/components/header";
import Main from "@/components/main";
import Modal from "@/components/modal";
import AddContent from "@/components/modal/addContent";
import DeleteContent from "@/components/modal/deleteContent";
import "@/styles/pages/home.scss";
import { useState } from "react";

export default function Home() {
  const [addVisible, setAddVisible] = useState<boolean>(false);
  const [deleteVisible, setDeleteVisible] = useState<boolean>(false);

  return (
    <div className="home-container">
      <Header />
      <Main setAddVisible={setAddVisible} setDeleteVisible={setDeleteVisible} />

      <Modal modalVisible={addVisible}>
        <AddContent setAddVisible={setAddVisible} />
      </Modal>

      <Modal modalVisible={deleteVisible}>
        <DeleteContent setDeleteVisible={setDeleteVisible} />
      </Modal>
    </div>
  );
}
