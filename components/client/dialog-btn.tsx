import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface AlertDialogProps {
  children: string;
  desc: React.ReactNode;
  title: string;
  cancel: string;
  action: boolean;
}

const DialogButton: React.FC<AlertDialogProps> = ({ desc, children, cancel, title, action }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="px-2 py-1.5 bg-sky-500 rounded-sm">
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-foreground">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription asChild className="text-primary-foreground">
            {desc}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancel}</AlertDialogCancel>
          {action && <AlertDialogAction>Continue</AlertDialogAction>}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { DialogButton };
