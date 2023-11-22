// import Sidebar from "@/module/Sidebar";
// import Card from "@/module/Card";
import Card from "@/module/Card";
import Sidebar from "@/module/Sidebar";
import styles from "@/template/BuyResidentialsPage.module.css";

function BuyResidentialsPage({ data }) {

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}><Sidebar/></div>
        <div className={styles.main}>
          {data?.length ===0 && <p className={styles.text}>هیچ اگهی ثبت نشده است</p>}
          {/* <Sidebar /> */}
          {data?.map(item=> <Card key={item._id} data={item}/>)}
        </div>
   

    </div>
  );
}

export default BuyResidentialsPage;
