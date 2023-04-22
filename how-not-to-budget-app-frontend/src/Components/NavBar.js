
import { Button, Stack } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

function NavBar() {
  return (
    <Container>
    <Stack direction="horizontal" gap="3" className="mb-4">
      <h1 className='me-auto'>BudgetMe App</h1>
      <Button varient="primary">Add Budget</Button>
      <Button varient="outline-primary">New Transaction</Button>
    </Stack>
    <div>Hello Peeps! Welcome to the How <em>"Not"</em> To Budget App. Happy Spending!! 💰💸🤑</div>
  </Container>
  );
}

export default NavBar;
