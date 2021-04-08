## MyHomeFit - Web

## Rule
- 코딩을 바로 시작하지 않고, issue를 생성하여 해야할 일을 정리하고 issue번호로 브랜치를 생성한 후(branch명: feat/이슈 번호) 시작한다.
- 절대 main(또는 master)에서 바로 작업하지 않고, issue번호 별로 branch를 생성해서 그 branch에서 작업한다
- merge는 주기적으로 자주 
- commit은 생활화하자 (issue에서 각 항목별로 구현 완료할때마다 체크해주고 commit해주자)
- commit할때는 commit messege convention을 최대한 지켜주자


## commit messege convention
- feat(FileName) : 작업내용 
                  -> 한 단위 완성 (issue에서 항목 별로 commit 권장)
- fix(FileName) : 작업내용 
                  -> 디버깅, 오류 수정
- refactor (FileName) : 작업내용 
                  -> 리팩토링

- 수정한 파일이 많을 경우에는 FileName을 폴더 명 혹은 작업 단위로 대체한다
- commit 메시지가 여러줄일 경우 제목과 내용을 분리시킨다.
