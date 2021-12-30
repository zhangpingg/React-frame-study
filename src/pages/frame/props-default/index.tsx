import React from "react";

interface PropsDefaultProps {
  userName?: string,
  age?: number
}

const PropsDefault: React.FC<PropsDefaultProps> = (props) => {
  const {userName='张三'} = props;
  
  return (
    <div>
      <h3>props 默认值</h3>
      {userName}
      <hr /><br /><br />
    </div>
  )
}

export default PropsDefault;