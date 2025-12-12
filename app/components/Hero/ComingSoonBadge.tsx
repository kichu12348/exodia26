import styles from "./ComingSoonBadge.module.css";

// register now badge component

const ComingSoonBadge = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    ("https://makemypass.com/event/exodia26");
    window.open("https://makemypass.com/event/exodia26", "_blank");
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <span className={styles.text}>REGISTER NOW</span>
    </div>
  );
};

export default ComingSoonBadge;
