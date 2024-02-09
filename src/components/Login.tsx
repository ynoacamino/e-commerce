import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { signIn } from 'next-auth/react';
import GoogleIcon from './icons/GoogleIcon';
import GithubIcon from './icons/GithubIcon';

export default function Login({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      {children}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Inicia Sesion
          </DialogTitle>
          <DialogDescription>
            Inicia sesion para poder acceder a todas las funcionalidades de la
            plataforma.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button variant="outline" onClick={() => signIn('google')}>
            <GoogleIcon />
            <span className="ml-2">Google</span>
          </Button>
          <Button variant="outline" onClick={() => signIn('github')}>
            <GithubIcon />
            <span className="ml-2">GitHub</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
