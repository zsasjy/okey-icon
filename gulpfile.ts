import path from 'path';
import gulp from 'gulp';
import babel from 'gulp-babel';
import gulpTs from 'gulp-typescript';
import merge from 'merge2';
import less from 'gulp-less';
import rename from 'gulp-rename';
import minifyCSS from 'gulp-minify-css';
import replace from 'gulp-replace';
import tsConfigReact from './packages/react/tsconfig.json';
import tsConfigVue from './packages/vue/tsconfig.json';
import getBabelConfig from './getBabelConfig';
import del from 'del';

const configMap = {
    react: tsConfigReact,
    vue: tsConfigVue,
    svg: { compilerOptions:{} },
    vue3: { compilerOptions:{} }
}

function resolve(...arg: string[]): string {
    return path.resolve(process.cwd(), ...arg);
}

function build(name: 'react' | 'vue' | 'svg' | 'vue3'): string {
    const cwd = resolve('packages/', name);
    gulp.task('clean', () => {
        return del([cwd + "/es",cwd + "/lib", cwd + "styles"])
    })
    gulp.task('build-script-'+ name, () => {
        const result = gulp
            .src(['src/*.ts', 'src/*.tsx', 'src/**/*.ts', 'src/**/*.tsx'], {
                cwd
            })
            .pipe(gulpTs(configMap[name].compilerOptions));
        const isVueNext = name === 'vue3';
        // 如果存在vue3 则需要重命名
        let jsResultStream = isVueNext ? result.js.pipe(replace('alias-for-vue3', 'vue')) : result.js;
        let dtsResultStream = isVueNext ? result.dts.pipe(replace('alias-for-vue3', 'vue')) : result.dts;
        // let jsResultStream = result.js;
        // let dtsResultStream = result.dts;
        // 合并lib 和 es
        return merge([
            jsResultStream
                .pipe(babel(getBabelConfig[name]))
                .pipe(gulp.dest(cwd + '/es'))
                .pipe(
                    babel({
                        plugins: ['@babel/plugin-transform-modules-commonjs'],
                    }),
                )
                .pipe(gulp.dest(cwd + '/lib')),
            dtsResultStream
                .pipe(gulp.dest(cwd + '/es'))
                .pipe(gulp.dest(cwd + '/lib')),
        ]);
    });
    // 暂不需要编译icons-json文件()
    // gulp.task('build-copy-icons-json-' + name, () => {
    //     return gulp
    //         .src(resolve('source/icon-config.json'))
    //         .pipe(rename('icons.json'))
    //         .pipe(gulp.dest(cwd));
    // });
    // const tasks = ['build-script-' + name, 'build-copy-icons-json-' + name];

    const tasks = ['build-script-' + name];
    if(name !== 'svg'){
        // 处理css
        gulp.task('build-css-' + name, () => {
            return gulp
                .src('src/components/index.less', { cwd })
                .pipe(less())
                .pipe(minifyCSS())
                .pipe(gulp.dest(cwd + '/styles'));
        });
        // 处理less
        gulp.task('build-less-' + name, () => {
            return gulp
                .src('src/components/index.less', { cwd })
                .pipe(gulp.dest(cwd + '/styles'));
        });

        tasks.push('build-css-' + name, 'build-less-' + name);
    }
    gulp.task('build-' + name, gulp.series(['clean',gulp.parallel(tasks)]));

    return 'build-' + name;
}

// 打包构建
gulp.task(
    'default',
    gulp.series([
        build('react'),
        build('vue'),
        // createBuildTask('vue-next'),
        // createBuildTask('svg'),
    ]),
);