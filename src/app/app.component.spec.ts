import { TestBed, async } from '@angular/core/testing';
import { AppComponent, Task } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  xit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todo-list'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('todo-list');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('todo-list app is running!');
  });
  
  it('it should to init tasks', () => {
    const fixture = new(AppComponent);
    expect(fixture.tasks.length).toBe(5)
  });

  it('should  sort tasks by deadline asc', () => {
    const fixture = new (AppComponent);
    fixture.tasks = [
      {
        id:'0',
        name: 'English Homework',
        status: 'todo',
        descr: 'Exercises 1,5,10 page N876',
        deadline: "",
        priority: 'medium'
      },
      {
        id:'1',
        name: 'Math Homework',
        status: 'done',
        descr: 'prove the Pythagorean theorem',
        deadline: "2020-06-19",
        priority: 'high'
      },
      {
        id:'2',
        name: 'Literature Homework',
        status: 'done',
        descr: 'Reading novels by Dostoevsky',
        deadline: "2020-06-19",
        priority: 'low'
      },
      {
        id:'3',
        name: 'Spanish Homework',
        status: 'doing',
        descr: 'Preparation for exams',
        deadline: "2020-07-20",
        priority: 'high'
      },
      {
        id:'4',
        name: 'Scientific report',
        status: 'doing',
        descr: 'Report on the benefits of a healthy diet',
        deadline: "2020-08-01",
        priority: 'low'
      }
    ];
    const taskAfterSort: Task[] = [
      {
        id:'1',
        name: 'Math Homework',
        status: 'done',
        descr: 'prove the Pythagorean theorem',
        deadline: "2020-06-19",
        priority: 'high'
      },
      {
        id:'2',
        name: 'Literature Homework',
        status: 'done',
        descr: 'Reading novels by Dostoevsky',
        deadline: "2020-06-19",
        priority: 'low'
      },
      {
        id:'3',
        name: 'Spanish Homework',
        status: 'doing',
        descr: 'Preparation for exams',
        deadline: "2020-07-20",
        priority: 'high'
      },
      {
        id:'4',
        name: 'Scientific report',
        status: 'doing',
        descr: 'Report on the benefits of a healthy diet',
        deadline: "2020-08-01",
        priority: 'low'
      },
      {
        id:'0',
        name: 'English Homework',
        status: 'todo',
        descr: 'Exercises 1,5,10 page N876',
        deadline: "",
        priority: 'medium'
      }
    ];
    fixture.asc = true
    fixture.tasks.sort(fixture.sortByDeadline.bind(fixture))
    expect(fixture.tasks).toEqual(taskAfterSort)
  });

  it('should  sort tasks by deadline desc', () => {
    const fixture = new (AppComponent);
    fixture.tasks = [
      {
        id:'0',
        name: 'English Homework',
        status: 'todo',
        descr: 'Exercises 1,5,10 page N876',
        deadline: "",
        priority: 'medium'
      },
      {
        id:'1',
        name: 'Math Homework',
        status: 'done',
        descr: 'prove the Pythagorean theorem',
        deadline: "2020-06-19",
        priority: 'high'
      },
      {
        id:'2',
        name: 'Literature Homework',
        status: 'done',
        descr: 'Reading novels by Dostoevsky',
        deadline: "2020-06-19",
        priority: 'low'
      },
      {
        id:'3',
        name: 'Spanish Homework',
        status: 'doing',
        descr: 'Preparation for exams',
        deadline: "2020-07-20",
        priority: 'high'
      },
      {
        id:'4',
        name: 'Scientific report',
        status: 'doing',
        descr: 'Report on the benefits of a healthy diet',
        deadline: "2020-08-01",
        priority: 'low'
      }
    ];
    const taskAfterSort: Task[] = [
      {
        id:'0',
        name: 'English Homework',
        status: 'todo',
        descr: 'Exercises 1,5,10 page N876',
        deadline: "",
        priority: 'medium'
      },
      {
        id:'4',
        name: 'Scientific report',
        status: 'doing',
        descr: 'Report on the benefits of a healthy diet',
        deadline: "2020-08-01",
        priority: 'low'
      },
      {
        id:'3',
        name: 'Spanish Homework',
        status: 'doing',
        descr: 'Preparation for exams',
        deadline: "2020-07-20",
        priority: 'high'
      },
      {
        id:'1',
        name: 'Math Homework',
        status: 'done',
        descr: 'prove the Pythagorean theorem',
        deadline: "2020-06-19",
        priority: 'high'
      },
      {
        id:'2',
        name: 'Literature Homework',
        status: 'done',
        descr: 'Reading novels by Dostoevsky',
        deadline: "2020-06-19",
        priority: 'low'
      }
    ];
    fixture.asc = false
    fixture.tasks.sort(fixture.sortByDeadline.bind(fixture))
    expect(fixture.tasks).toEqual(taskAfterSort)
  });

  it('should  sort tasks by priority asc', () => {
    const fixture = new (AppComponent);
    fixture.tasks = [
      {
        id:'0',
        name: 'English Homework',
        status: 'todo',
        descr: 'Exercises 1,5,10 page N876',
        deadline: "",
        priority: 'medium'
      },
      {
        id:'1',
        name: 'Math Homework',
        status: 'done',
        descr: 'prove the Pythagorean theorem',
        deadline: "2020-06-19",
        priority: 'high'
      },
      {
        id:'2',
        name: 'Literature Homework',
        status: 'done',
        descr: 'Reading novels by Dostoevsky',
        deadline: "2020-06-19",
        priority: 'low'
      },
      {
        id:'3',
        name: 'Spanish Homework',
        status: 'doing',
        descr: 'Preparation for exams',
        deadline: "2020-07-20",
        priority: 'high'
      },
      {
        id:'4',
        name: 'Scientific report',
        status: 'doing',
        descr: 'Report on the benefits of a healthy diet',
        deadline: "2020-08-01",
        priority: 'low'
      }
    ];
    const taskAfterSort: Task[] = [
      {
        id:'2',
        name: 'Literature Homework',
        status: 'done',
        descr: 'Reading novels by Dostoevsky',
        deadline: "2020-06-19",
        priority: 'low'
      },
      {
        id:'4',
        name: 'Scientific report',
        status: 'doing',
        descr: 'Report on the benefits of a healthy diet',
        deadline: "2020-08-01",
        priority: 'low'
      },
      {
        id:'0',
        name: 'English Homework',
        status: 'todo',
        descr: 'Exercises 1,5,10 page N876',
        deadline: "",
        priority: 'medium'
      },
      {
        id:'1',
        name: 'Math Homework',
        status: 'done',
        descr: 'prove the Pythagorean theorem',
        deadline: "2020-06-19",
        priority: 'high'
      },
      {
        id:'3',
        name: 'Spanish Homework',
        status: 'doing',
        descr: 'Preparation for exams',
        deadline: "2020-07-20",
        priority: 'high'
      }
    ];
    fixture.asc = true
    fixture.tasks.sort(fixture.sortByPriority.bind(fixture))
    expect(fixture.tasks).toEqual(taskAfterSort)
  });

  it('should  sort tasks by priority desc', () => {
    const fixture = new (AppComponent);
    fixture.tasks = [
      {
        id:'0',
        name: 'English Homework',
        status: 'todo',
        descr: 'Exercises 1,5,10 page N876',
        deadline: "",
        priority: 'medium'
      },
      {
        id:'1',
        name: 'Math Homework',
        status: 'done',
        descr: 'prove the Pythagorean theorem',
        deadline: "2020-06-19",
        priority: 'high'
      },
      {
        id:'2',
        name: 'Literature Homework',
        status: 'done',
        descr: 'Reading novels by Dostoevsky',
        deadline: "2020-06-19",
        priority: 'low'
      },
      {
        id:'3',
        name: 'Spanish Homework',
        status: 'doing',
        descr: 'Preparation for exams',
        deadline: "2020-07-20",
        priority: 'high'
      },
      {
        id:'4',
        name: 'Scientific report',
        status: 'doing',
        descr: 'Report on the benefits of a healthy diet',
        deadline: "2020-08-01",
        priority: 'low'
      }
    ];
    const taskAfterSort: Task[] = [
      {
        id:'1',
        name: 'Math Homework',
        status: 'done',
        descr: 'prove the Pythagorean theorem',
        deadline: "2020-06-19",
        priority: 'high'
      },
      {
        id:'3',
        name: 'Spanish Homework',
        status: 'doing',
        descr: 'Preparation for exams',
        deadline: "2020-07-20",
        priority: 'high'
      },
      {
        id:'0',
        name: 'English Homework',
        status: 'todo',
        descr: 'Exercises 1,5,10 page N876',
        deadline: "",
        priority: 'medium'
      },
      {
        id:'2',
        name: 'Literature Homework',
        status: 'done',
        descr: 'Reading novels by Dostoevsky',
        deadline: "2020-06-19",
        priority: 'low'
      },
      {
        id:'4',
        name: 'Scientific report',
        status: 'doing',
        descr: 'Report on the benefits of a healthy diet',
        deadline: "2020-08-01",
        priority: 'low'
      }
    ];
    fixture.asc = false
    fixture.tasks.sort(fixture.sortByPriority.bind(fixture))
    expect(fixture.tasks).toEqual(taskAfterSort)
  });

});
