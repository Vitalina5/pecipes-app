const Button = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
     });

    return (<div>
    <button className='btn-up' onClick={Button} type='button'><img className='arrow' src='icon-up-arrow.png' alt='arrow'/></button>
    </div>
    );
}

export default Button;