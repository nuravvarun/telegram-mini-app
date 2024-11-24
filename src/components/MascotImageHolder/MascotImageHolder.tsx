import ProductImage from "../../../assets/panda-robo.png";
import TextImage from "../../../assets/Frame 48098836.svg";
const MascotImageHolder = () => {
    return (
        <div className="grid grid-cols-2 gap-2">
            <div className="flex my-5 justify-end" id="imageHolder">
                <img src={ProductImage} alt="Product Image" className="w-11/12 max-w-[300px]" />
            </div>
            <div className="flex my-5 ml-5 justify-start" id="imageHolder">
                <img src={TextImage} alt="Product Image" className="w-11/12 max-w-[300px] min-w-[190px]" />
            </div>
        </div>
    );
};

export default MascotImageHolder;