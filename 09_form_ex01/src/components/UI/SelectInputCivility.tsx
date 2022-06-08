import CustomSelectInput from "./CustomSelectInput";

const SelectInputCivility: React.FC = (props) => {
    return (
        <CustomSelectInput
            inputId="civility"
            options={["Monsieur", "Madame", "Mademoiselle"]}
            label={"Civilité"}
            placeholder={"Choisissez votre civilité"}
        />
    );
};

export default SelectInputCivility;
