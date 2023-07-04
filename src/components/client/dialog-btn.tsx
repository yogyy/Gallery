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
  trigger: string;
  children: React.ReactNode;
  title: string;
  cancel: string;
  action: boolean;
}

const DialogButton: React.FC<AlertDialogProps> = ({ children, trigger, cancel, title, action }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="px-2 py-1.5 bg-sky-500 rounded-sm">
        {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-foreground">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription asChild className="text-primary-foreground">
            {children}
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
