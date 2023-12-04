
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

  
    setProfileData({ ...profileData, [name]: p2e(value) });
  };

  return (
  
    <>

      {textarea ?

        <div className="formControl ">
          <textarea
            className="inp"
            type="text"
            name={name}
            value={profileData?.[name]}
            onChange={changeHandler}
            id={name}

            autoComplete="off" />
          <label className={`textLabel  ${profileData?.[name] && "labeltop "}`} htmlFor={title}>{title}</label>
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
          <label className={`textLabel  ${profileData?.[name] && "labeltop "}`} htmlFor={title}>{title}</label>
        </div>

      }
    </>



  );
};

export default TextInput;
