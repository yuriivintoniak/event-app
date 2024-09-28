import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.registerWrapper}>
      <h1 className="my-7">Event registration</h1>
      <form method="post" action="http://localhost:4000/register" className="flex flex-col">
        <span>Full name</span>
        <input type="text" name="name" />
        
        <span>Email</span>
        <input type="email" name="email" />

        <span>Date of birth</span>
        <input type="date" name="date" />

        <div className="mt-8">
          <span>Where did you hear about this event?</span>
          <div className="mt-3 flex justify-between w-[28rem]">
            <label>
              <input type="radio" value="Social media" />
              <span>Social media</span>
            </label>
            
            <label>
              <input type="radio" value="Friends" />
              <span>Friends</span>
            </label>

            <label>
              <input type="radio" value="Found myself" />
              <span>Found myself</span>
            </label>
          </div>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>

  );
}

export default Register;
