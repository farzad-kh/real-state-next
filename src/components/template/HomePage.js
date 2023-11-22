// import { FiCircle } from "react-icons/fi";
// import { FaCity } from "react-icons/fa";
// import CategoryCard from "@/module/CategoryCard";
// import { categories, cities, services } from "@/constants/strings";
// import styles from "@/template/HomePage.module.css";

// function HomePage() {
//   return (
//     <div>
//       <div className={styles.banner}>
//         <div className={styles.desc}>
//           <h1>سامانه خرید و اجاره ملک</h1>
//           <ul>
//             {services.map((i) => (
//               <li key={i}>
//                 <FiCircle />
//                 <span>{i}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className={styles.categories}>
//         {Object.keys(categories).map((i) => (
//           <CategoryCard title={categories[i]} name={i} />
//         ))}
//       </div>
//       <div className={styles.city}>
//         <h3>شهر های پر بازدید</h3>
//         <ul>
//           {cities.map((i) => (
//             <li key={i}>
//               <FaCity />
//               <span>{i}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default HomePage;
import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";

import { services, categories,cities } from "@/constants/strings";
import styles from "@/template/HomePage.module.css";
import CategoryCard from "@/module/CategoryCard";

function HomePage() {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((item,i) => (
              <li key={i}>
                <FiCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {console.log(categories)}
      <div className={styles.categories}>
        {Object.keys(categories).map((item,i) => (
            <CategoryCard title={categories[item]} name={item} key={i} />
        ))}
      </div>
      <div className={styles.city}>
        <h3>شهر های پر بازدید</h3>
        <ul>
          {cities.map((item,i) => (
            <li key={i}>
              <FaCity />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
