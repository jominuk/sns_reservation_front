// 회원가입
export interface JoinMemberType {
  userId: string;
  password: string;
  memo?: string;
}

// 로그인
export interface LoginMemberType {
  userId: string;
  password: string;
  accessToken: string;
  refreshToken?: string;
}

// 내 정보
export interface GetMemberType {
  id: number;
  userId: string;
  memo: string;
}

//관리자 맴버 리스트 타입
export interface GetAdminMemberType {
  id: number;
  userId: string;
  memo: string;
  createdAt: string;
  updatedAt: string;
  deactivatedAt: string | null;
  role: string;
  active: boolean;
}
// 관리자 맴버의 페이징 타입
export interface AdminMemberResponse {
  content: GetAdminMemberType[];
  pageable: object;
  last: boolean;
  totalPages: number;
  totalElements: number;
}
