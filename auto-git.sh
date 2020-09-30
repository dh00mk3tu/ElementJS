echo "Auto Git"
echo "This script is now monitoring this current directory"

while :

do 
    if [ -d .git ]; then
        echo "Git Repo"
        echo .git;
    else
        echo "Not a Git Repo"
        git rev-parse --git-dir 2> /dev/null;
    fi;
    sleep 10
done