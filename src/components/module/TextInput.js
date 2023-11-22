import { p2e } from "@/utils/replaceNumber";
import styles from "@/module/TextInput.module.css";

const TextInput = ({
  title,
  name,
  profileData,
  setProfileData,
  textarea,

}) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  
    setProfileData({ ...profileData, [name]: p2e(value) });
  };
console.log(profileData);
  return (
    // <div className={styles.container}>
    //   <p>{title}</p>
    //   {textarea ? (
    //     <textarea
    //       type="text"
    //       name={name}
    //       value={profileData?.[name]}
    //       onChange={changeHandler}
    //     />
    //   ) : (
    //     <input
    //       type="text"
    //       name={name}
    //       value={profileData?.[name]}
    //       onChange={changeHandler}
    //     />
    //   )}
    // </div>


    <>

      {textarea ?

        <div className="formControl">
          <textarea
            className="inp"
            type="text"
            name={name}
            value={profileData?.[name]}
            onChange={changeHandler}
            id={name}

            autoComplete="off" />
          <label className={`textLabel  ${profileData?.[name].length > 0 && "labeltop "}`} htmlFor={title}>{title}</label>
        </div>
        :
        <div className="formControl">
          <input
            className="inp"
            type="text"
            name={name}
            value={profileData?.[name]}
            onChange={changeHandler}
            id={name}

            autoComplete="off" />
          <label className={`textLabel  ${profileData?.[name].length > 0 && "labeltop "}`} htmlFor={title}>{title}</label>
        </div>

      }
    </>



  );
};

export default TextInput;
