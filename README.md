### Weather App

**Overview**
위치기반의 날씨정보를 바탕으로 화면에 표시해줍니다.

**demo site**
https://sprint-debug.github.io/weather-ms/

<hr>

**Components**

WeatherDashboard

- 메인 컴포넌트로 날씨 정보를 가져와 화면에 표시합니다.

1. Features:

현재 위치 기반 날씨 정보 표시
지정된 도시 버튼을 통해 위치 변경 및 해당 위치의 날씨 정보 업데이트
위치에 따른 날씨 아이콘 표시

2. Map
   현재 위치를 지도 상에 표시하는 컴포넌트입니다. (WeatherDashboard 컴포넌트 내에 포함)

3. etWeatherIcon
   주어진 날씨 조건을 바탕으로 해당하는 날씨 아이콘을 반환하는 함수입니다. 예를 들어, "Clear" 조건의 경우 태양 아이콘을 반환합니다.

<hr>

**Usage:**

Latitude & Longitude Input: 사용자는 위도와 경도를 직접 입력하여 해당 위치의 날씨 정보를 확인할 수 있습니다.
City Buttons: 사전에 정의된 도시 버튼을 통해 빠르게 날씨를 확인할 수 있습니다. (서울, 부산, 대전, 대구, 인천)
Weather Information: 현재의 온도, 습도, 날씨 상태 및 기타 날씨 관련 정보를 화면에 표시합니다.

<hr>

**Development & Configuration**

1. TypeScript:
   이 프로젝트는 TypeScript (^4.9.5)를 사용하여 작성되었습니다. TypeScript는 정적 타입 검사를 제공하여, 버그를 미리 잡고 더 나은 코드 품질을 유지할 수 있습니다.

2. Prettier:
   코드 스타일링과 일관성을 위해 Prettier를 사용합니다. Prettier는 코드를 자동으로 정리하여 개발자 간의 코드 - 스타일 차이를 최소화합니다.

Settings:

- 자바스크립트 파일의 기본 포매터로 "esbenp.prettier-vscode"를 사용
- 저장 시 자동으로 코드 포맷
- HTML 파일의 기본 포매터로 "vscode.html-language-features"를 사용

3. Configuration Settings:

- 파일 탐색기에서 드래그 앤 드롭 시 확인을 하지 않음
- 새 창에서 파일 열기 옵션 활성화
- 특정 메시지와 경고를 숨기기 위한 설정 추가

**Note:**
이 앱은 OpenWeatherMap API를 사용하여 날씨 데이터를 가져옵니다.
