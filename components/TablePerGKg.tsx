import { Box, Divider, Input, NumberInput, Paper, Space, Table, Text } from '@mantine/core'
import { useState } from 'react';
import React from 'react'
import { getFormula } from '../values/formulas';

const TablePerGKg = ({ sex, weight, height, age, factor, formula }: { sex: any, weight: any, height: any, age: any, factor: any, formula: any }) => {
    const [kgProtein, setkgProtein] = useState(0.0)
    const [kgLipids, setkgLipids] = useState(0.0)
    const kc = () => parseFloat(getFormula({ factor, sex, weight, height, age, formula }).toFixed(2))
    const gramProtein = () => weight * kgProtein
    const gramLipids = () => weight * kgLipids
    const kcProtein = () => gramProtein() * 4
    const kcLipids = () => gramLipids() * 9
    const percentageProtein = () => (((gramProtein() * 4)/kc())*100)
    const percentageLipids = () => (((gramLipids() * 9)/kc())*100)
    const percentageCarbohydrates = () => 99.99-(percentageProtein()+percentageLipids())
    

    return (
        <Box sx={{ maxWidth: 600 }} mx="auto" >
            <Paper shadow="xs" radius="md" p="lg" withBorder>
                <Text weight={700}>Por g/Kg</Text>
                <Space h="xs" />
                <Divider />
                <Space h="sm" />
                <Table>
                    <thead>
                        <tr>
                            <th>Macronutrientes</th>
                            <th>%</th>
                            <th>Kcal</th>
                            <th>g</th>
                            <th>g/Kg</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Proteinas</td>

                            <td><Text sx={{ maxWidth: 70, minWidth: 70 }}> { gramProtein() != 0 ? percentageProtein().toFixed(2) : '---' } </Text></td>
                            <td><Text sx={{ maxWidth: 70, minWidth: 70 }}>{ gramProtein() != 0 ? kcProtein().toFixed(2) : '---' }</Text></td>
                            <td> <Text sx={{ maxWidth: 70, minWidth: 70 }}>{ gramProtein() != 0 ? gramProtein().toFixed(2) : '---' }</Text> </td>
                            <td><NumberInput variant="filled" sx={{ maxWidth: 70 }} 
                            value={kgProtein}
                            precision={1}
                            min={0.0} 
                            step={0.1}
                            onChange={(val:any) => {setkgProtein(val)} }
                            /></td>
                        </tr>
                        <tr>
                            <td>Lipidos</td>

                            <td><Text sx={{ maxWidth: 70, minWidth: 70 }}> {gramLipids() != 0 ? percentageLipids().toFixed(2) : '---'} </Text></td>
                            <td><Text sx={{ maxWidth: 70, minWidth: 70 }}>{ gramLipids() != 0 ? kcLipids().toFixed(2) : '---'}</Text></td>
                            <td> <Text sx={{ maxWidth: 70, minWidth: 70 }}>{ gramLipids() != 0 ? gramLipids().toFixed(2) : '---' }</Text> </td>
                            <td><NumberInput variant="filled" sx={{ maxWidth: 70 }}
                            value={kgLipids}
                            precision={1}
                            min={0.0} 
                            step={0.1}
                            onChange={(val:any) => {setkgLipids(val)} }
                             /></td>
                        </tr>
                        <tr>
                            <td>Carbohidratos</td>
                            <td><Text sx={{ maxWidth: 70, minWidth: 70 }} >{ percentageLipids() != 0 && percentageLipids() != 0 ? percentageCarbohydrates().toFixed(2) : '---'}</Text></td>
                            <td><Text sx={{ maxWidth: 70, minWidth: 70 }} >{  }</Text></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>{percentageProtein() != 0 && percentageLipids() != 0 && percentageCarbohydrates() != 0 ? (percentageCarbohydrates() + percentageLipids() + percentageProtein()).toFixed(2) : '---'}</td>
                            <td>{kc()}</td>
                        </tr>
                    </tbody>
                </Table>
            </Paper>
        </Box>
    )
}

export default TablePerGKg