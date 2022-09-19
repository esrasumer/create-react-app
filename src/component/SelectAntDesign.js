import React from 'react'
import { Select } from 'antd'
import 'antd/dist/antd.css'

const { Option } = Select;

function SelectAntDesign() {

    return (
        <div>
            <Select
                placeholder="Fruit"
                style={{ width: 120, display: 'flex' }}
            >
                <Option value="1">Banana</Option>
                <Option value="2">Orange</Option>
                <Option value="3">Melon</Option>
                <Option value="4">Cherry</Option>
            </Select>
            </div>
    )
}

export default SelectAntDesign;