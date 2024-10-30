
const currentDate = new Date();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <span><p>Decker Ayers - {month}, {year} - All rights Reserved</p></span>
        </div>
    </footer>
    );
  }
  
  export default Footer;