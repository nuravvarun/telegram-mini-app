import Logo from "../../../assets/Logo.svg"; // Adjust path based on where you store assets

const LogoHolder = () => {
    return (
        <div className="flex justify-center bg-transparent mx-5 relative top-2 h-12">
            <img src={Logo} alt="Chainaware.ai Logo" className="p-2" />
        </div>
    );
};

export default LogoHolder;