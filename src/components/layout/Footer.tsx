export default function Footer() {
  return (
    <footer className="bg-background border-t border-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">ByWorship</div>
            <p className="text-muted-foreground">
              교회 예배팀을 위한 올인원 관리 솔루션
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">제품</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">기능</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">요금제</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">지원</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">도움말</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">문의하기</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">커뮤니티</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">회사</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">소개</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">블로그</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 ByWorship. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0 flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.017 0H7.982C3.582 0 0 3.582 0 7.982v4.035C0 16.418 3.582 20 7.982 20h4.035C16.418 20 20 16.418 20 12.017V7.982C20 3.582 16.418 0 12.017 0zM10 15a5 5 0 110-10 5 5 0 010 10zm6.408-10.845a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}