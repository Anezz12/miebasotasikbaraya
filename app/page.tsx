import Image from 'next/image';

export default function Home() {
  // Sample student data - you can replace with your actual data
  const studentInfo = {
    nim: '22.11.4764',
    nama: 'Arya Rabbani',
    jurusan: 'Teknik Informatika',
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-md">
        {/* Student Info Card */}
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            Student Information
          </h1>

          <div className="space-y-4">
            <div className="flex flex-col">
              <p className="text-sm text-gray-500 dark:text-gray-400">NIM</p>
              <p className="text-lg font-medium">{studentInfo.nim}</p>
            </div>

            <div className="flex flex-col">
              <p className="text-sm text-gray-500 dark:text-gray-400">Nama</p>
              <p className="text-lg font-medium">{studentInfo.nama}</p>
            </div>

            <div className="flex flex-col">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Jurusan
              </p>
              <p className="text-lg font-medium">{studentInfo.jurusan}</p>
            </div>
          </div>
        </div>

        {/* Optional: You can add a button to edit information */}
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500">
        <p>© 2025 Student Information System</p>
      </footer>
    </div>
  );
}
