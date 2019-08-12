import { Application } from 'probot';
import { Service } from 'typedi';

@Service()
export class GithubService {
    private app: Application;

    private constructor(app: Application) {
        this.app = app;

        app.on('issues.opened', async context => {
            const issueComment = context.issue({ body: 'Thanks for opening this issue!' });
            await context.github.issues.createComment(issueComment);
        });
    }

    static getInstance() {
        return (app: Application) => {
            return new GithubService(app);
        };
    }
}
