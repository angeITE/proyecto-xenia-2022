import { Accordion } from '@mantine/core';
import Cabecera from './cabecera';

function Pruebas() {
  return (
    <Cabecera>
        <Accordion variant="contained" defaultValue="customization">
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>
            <Accordion variant="contained" defaultValue=''>
                <Accordion.Item value='nose'>
                    <Accordion.Control>Nombre alimento</Accordion.Control>
                    <Accordion.Panel>la lista</Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>Flexibility</Accordion.Control>
        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
    </Cabecera>
  );
}
export default Pruebas