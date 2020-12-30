import { styleVars } from '../styleVars'

const SvgUI = (props) => {
    const { Icon, ...rest } = props
    return (
        <Icon
            height="24px"
            width="24px"
            htmlColor={styleVars.primaryLight}
            fill={styleVars.primaryLight}
            {...rest}
        />
    )
}

export default SvgUI
