import errorImg from '../../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img src={errorImg} alt="" />
            <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default ErrorPage;