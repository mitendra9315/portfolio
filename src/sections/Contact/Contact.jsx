import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
    <label htmlFor="mailto" hidden>
      Email Us
    </label>
    <a 
      className="hover btn" 
      href="mailto:example@example.com?subject=Contact%20Form%20Inquiry&body=Message%20here" 
      id="mailto"
      style={{ color: 'white' }}
    >
      Email Me
    </a>
  </div>
      </form>
    </section>
  );
}

export default Contact;
