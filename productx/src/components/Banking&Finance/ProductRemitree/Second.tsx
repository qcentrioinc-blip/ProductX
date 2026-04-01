import { H2, P } from '../../../styles/Typography';

const Second = () => {
    return (
        <div className="w-full py-12 px-4 md:px-8 bg-white flex flex-col items-center justify-center">
            <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
                <H2 className="text-[#2E68C6] font-bold mb-4">
                    Complete Cross-Border Remittance Platform
                </H2>
                <P className="max-w-4xl mx-auto text-center !leading-[150%] text-gray-700">
                    REMITREE is an advanced middleware solution that facilitates seamless cross-border remittance transactions. It acts as an intermediary between core banking systems and the Swift Alliance Gateway, enabling efficient bi-directional message handling with full compliance to MT and MX standards.
                </P>
            </div>
        </div>
    );
};

export default Second;