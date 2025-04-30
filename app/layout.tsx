/*
 * @Author: duke
 * @Date: 2025-04-25 18:33:51
 * @Description: 在此处清晰,简洁的说明本文件的作用
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}