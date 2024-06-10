import { Button } from '@/components/ui/button';
import { Input } from './components/ui/input';
import { PlusCircle, Search } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog';

export function App() {
  return (
    <div className='p-6 max-w-4xl mx-auto space-y-4'>
      <div className='flex items-center justify-between'>
        <form className='flex items-center gap-2'>
          <Input name='id' placeholder='Id do produto' />
          <Input name='name' placeholder='nome do produto' />
          <Button type='submit' variant='link'>
            <Search className='w-4 h-4 mr-2' />
            Filtrar resultados
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className='w-4 h-4 mr-2' />
              Novo produto
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo produto</DialogTitle>
              <DialogDescription>
                Criar um novo produto no sistema
              </DialogDescription>
            </DialogHeader>

            <form>
              <div className='flex flex-col gap-4 mb-4'>
                <Input name='test' />
                <Input name='test' />
                <Input name='test' />
                <Input name='test' />
              </div>

              <DialogFooter>
                <Button type='button' variant={'outline'}>
                  Cancelar
                </Button>
                <Button type='submit'>Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className='border rounded-lg p-2'>
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 25 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>{Math.random().toFixed()}</TableCell>
                <TableCell>Produto {index}</TableCell>
                <TableCell>
                  R$ {(Math.random() * (index + 1)).toFixed()},00
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
