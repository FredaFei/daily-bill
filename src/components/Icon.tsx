/**
 * @desc icon 组件
 * @author feihan
 * @date 2022/3/2 21:04
 */
import React from 'react';
import {importAll} from 'lib/importAll';
import cs from 'classnames';

try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

interface Props extends React.SVGAttributes<SVGElement> {
    name?: string;
}

const Icon: React.FC<Props> = (props) => {
    const {name, children, className, ...rest} = props;
    return (
        <svg className={cs('icon', className)} {...rest}>
            {props.name && <use xlinkHref={'#' + props.name}/>}
        </svg>
    );
};

Icon.defaultProps = {
    fill: 'currentColor'
};

export default Icon;