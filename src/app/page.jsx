export const dynamic = "force-dynamic";

import FormTask from './components/FormTask'
import ListTask from './components/ListTask'

function HomePage() {
  return (
    <div className='container mx-auto'>
      <h1>Task App</h1>

      <div className='flex gap-x-10'>
        <FormTask />
        <ListTask />
      </div>
    </div>
  );
}

export default HomePage
