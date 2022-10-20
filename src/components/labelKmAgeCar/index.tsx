import { LabelAgeKmStyled } from "./styled";


interface Label{
    info?: string;
}

const LabelAgeKm = ({info}: Label) => {
    return(
        <LabelAgeKmStyled>
            {info}
        </LabelAgeKmStyled>
    )
}

export {LabelAgeKm};