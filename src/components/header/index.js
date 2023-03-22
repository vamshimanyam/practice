import './header.css';

function Header() {
  return (
    < >
      <header className='background' style={{backgroundImage:`url(/salad4.jpg)`}}>
        <div className='header-flex'>
          <h1 className='header'>DELICIOUS AND  FRESH SALAD</h1>
          <p className='header-p'>We believe that nutritious and delicious food should be accessible to everyone. Try our salads today!</p>
        </div>
      </header>
    </>
  );
}

export default Header;
