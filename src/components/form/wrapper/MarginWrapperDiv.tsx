
type MarginWrapperDivProps = {
    marginBottom?: 'small' | 'medium' | 'large';
    children?: React.ReactNode
}

const MarginWrapperDiv = ({marginBottom, children} : MarginWrapperDivProps) : React.JSX.Element => {
    return <div className={`${marginBottom ? `margin-bottom-${marginBottom}` : ''}`} >
        {children}
    </div>;
};

export default MarginWrapperDiv;