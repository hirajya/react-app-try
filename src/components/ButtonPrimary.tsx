interface Props {
    text: string;
}

const ButtonPrimary = ({text}: Props) => {
    return (
        <button type="button" className="btn btn-primary">{text}</button>
    )
}

export default ButtonPrimary