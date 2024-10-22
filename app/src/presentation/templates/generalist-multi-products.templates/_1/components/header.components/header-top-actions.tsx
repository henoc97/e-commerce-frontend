import SelectCurrency from './select-currency';
import SelectLanguage from './select-language';

export default function HeaderTopAction() {
    return (
        <>
            <SelectCurrency />

            <div className="ml-1">
                <SelectLanguage />
            </div>
        </>
    );
}
