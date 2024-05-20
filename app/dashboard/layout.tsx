import '@/app/ui/global.css';
import SideNav from '../ui/dashboard/sidenav';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex h-full flex-grow flex-col">
        <div className="h-8 flex-none border-spacing-1 bg-white p-6 md:p-12">
          <div className="mb-5 mr-5 flex flex-row items-center justify-end leading-none">
            <UserCircleIcon className="h-8 w-8" />
            <p>
              Hello, <span className="font-bold">Person</span>
            </p>
          </div>
        </div>
        <div className="flex-grow overflow-y-auto p-6 md:p-12">{children}</div>
      </div>
    </div>
  );
}
