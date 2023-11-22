import styles from "@/module/RadioList.module.css";

function RadioList({ profileData, setProfileData }) {
  const category = profileData?.category;

  const changeHandler = (e) => {
    const { name, value } = e?.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (



    <div className="flex  mt-4 mb-8 flex-col ">
      <p>دسته بندی</p>
      <form className="flex">
        <label className="radio-button">
        <span  className="text-black">ویلا</span>
          <input
            type="radio"
            name="category"
            value="villa"
            id="villa"
            checked={category === "villa"}
            onChange={changeHandler}


          />
          <span className="radio"></span>
        </label>

        <label  className="radio-button">
        <div className="text-black">آپارتمان</div>
          <input
            type="radio"
            name="category"
            value="apartment"
            id="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
          <span className="radio"></span>
        </label>

        <label  className="radio-button">
        <div className="text-black" >مغازه</div>
          <input
            type="radio"
            name="category"
            value="store"
            id="store"
            checked={category === "store"}
            onChange={changeHandler}
          />
          <span className="radio"></span>
        </label>

        <label className="radio-button">
          <div className="text-black">دفتر</div>
          <input
            type="radio"
            name="category"
            value="office"
            id="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
          <span className="radio"></span>
        </label>
      </form>
    </div>



  );
}

export default RadioList;
