import style from "@/styles/Layout.module.css";
import { Footer, Header, Modal, Nav, Pagination, Table } from '@/components'


export function Layout({ children }){
  return (
    <div className={style.container}>
      <Header/>
      <Nav/>
      <main className={style.main}>{children}</main>
      <Table/>
      <Pagination/>
      <Footer/>
      <Modal/>
    </div>

  );
}
