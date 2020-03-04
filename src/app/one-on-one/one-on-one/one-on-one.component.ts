import { Component, OnInit } from '@angular/core';
import { Network, DataSet, Node, Edge } from 'vis';

@Component({
  selector: 'app-one-on-one',
  templateUrl: './one-on-one.component.html',
  styleUrls: ['./one-on-one.component.scss']
})
export class OneOnOneComponent implements OnInit {
  public nodes: Node;
  public edges: Edge;
  public network: Network;

  public ngOnInit(): void {
    const nodes = new DataSet([
      { id: 1, label: 'Node 1' },
      { id: 2, label: 'Node 2' },
      { id: 3, label: 'Node 3' },
      { id: 4, label: 'Node 4' },
      { id: 5, label: 'Node 5' },
      { id: 6, label: 'Node 6' },
      { id: 7, label: 'Node 7' },
      { id: 8, label: 'Node 8' },
      { id: 9, label: 'Node 9' },
      { id: 10, label: 'Node 10' },
      { id: 11, label: 'Node 11' },
      { id: 12, label: 'Node 12' },
      { id: 13, label: 'Node 13' },
      { id: 14, label: 'Node 14' },
      { id: 15, label: 'Node 15' },
      { id: 16, label: 'Node 16' },
      { id: 17, label: 'Node 17' },
      { id: 18, label: 'Node 18' },
      { id: 19, label: 'Node 19' },
      { id: 20, label: 'Node 20' },
      { id: 21, label: 'Node 21' },
      { id: 22, label: 'Node 22' },
      { id: 23, label: 'Node 23' },
      { id: 24, label: 'Node 24' },
      { id: 25, label: 'Node 25' },
      { id: 26, label: 'Node 26' },
      { id: 27, label: 'Node 27' },
      { id: 28, label: 'Node 28' },
      { id: 29, label: 'Node 29' },
      { id: 30, label: 'Node 30' },
      { id: 31, label: 'Node 31' },
      { id: 32, label: 'Node 32' },
      { id: 33, label: 'Node 33' },
      { id: 34, label: 'Node 34' },
      { id: 35, label: 'Node 35' },
      { id: 36, label: 'Node 36' },
      { id: 37, label: 'Node 37' },
      { id: 38, label: 'Node 38' },
      { id: 39, label: 'Node 39' },
      { id: 40, label: 'Node 40' },
      { id: 41, label: 'Node 41' },
      { id: 42, label: 'Node 42' },
      { id: 43, label: 'Node 43' },
      { id: 44, label: 'Node 44' },
      { id: 45, label: 'Node 45' },
      { id: 46, label: 'Node 46' },
      { id: 47, label: 'Node 47' },
      { id: 48, label: 'Node 48' },
      { id: 49, label: 'Node 49' },
      { id: 50, label: 'Node 50' }
    ]);
    // create an array with edges
    const edges = new DataSet([
      { from: 1, to: 3 },
      { from: 1, to: 2 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 3 },
      { from: 10, to: 20 },
      { from: 11, to: 26 },
      { from: 12, to: 6 },
      { from: 13, to: 8 },
      { from: 14, to: 43 },
      { from: 15, to: 7 },
      { from: 16, to: 7 },
      { from: 17, to: 24 },
      { from: 18, to: 11 },
      { from: 19, to: 17 },
      { from: 20, to: 18 },
      { from: 21, to: 2 },
      { from: 22, to: 17 },
      { from: 23, to: 21 },
      { from: 24, to: 14 },
      { from: 25, to: 29 },
      { from: 26, to: 45 },
      { from: 27, to: 10 },
      { from: 28, to: 11 },
      { from: 29, to: 1 },
      { from: 30, to: 47 },
      { from: 31, to: 5 },
      { from: 32, to: 37 },
      { from: 33, to: 13 },
      { from: 34, to: 48 },
      { from: 35, to: 11 },
      { from: 36, to: 16 },
      { from: 37, to: 39 },
      { from: 38, to: 36 },
      { from: 39, to: 2 },
      { from: 40, to: 36 },
      { from: 41, to: 6 },
      { from: 42, to: 45 },
      { from: 43, to: 34 },
      { from: 44, to: 1 },
      { from: 45, to: 12 },
      { from: 46, to: 32 },
      { from: 47, to: 1 },
      { from: 48, to: 44 },
      { from: 49, to: 30 },
      { from: 50, to: 32 },
      { from: 10, to: 30 },
      { from: 11, to: 49 },
      { from: 12, to: 21 },
      { from: 13, to: 17 },
      { from: 14, to: 6 },
      { from: 15, to: 21 },
      { from: 16, to: 49 },
      { from: 17, to: 3 },
      { from: 18, to: 14 },
      { from: 19, to: 50 },
      { from: 20, to: 17 },
      { from: 21, to: 27 },
      { from: 22, to: 34 },
      { from: 23, to: 12 },
      { from: 24, to: 47 },
      { from: 25, to: 33 },
      { from: 26, to: 35 },
      { from: 27, to: 5 },
      { from: 28, to: 46 },
      { from: 29, to: 3 },
      { from: 30, to: 14 },
      { from: 31, to: 38 },
      { from: 32, to: 7 },
      { from: 33, to: 8 },
      { from: 34, to: 34 },
      { from: 35, to: 22 },
      { from: 36, to: 8 },
      { from: 37, to: 7 },
      { from: 38, to: 26 },
      { from: 39, to: 12 },
      { from: 40, to: 28 },
      { from: 41, to: 40 },
      { from: 42, to: 47 },
      { from: 43, to: 39 },
      { from: 44, to: 3 },
      { from: 45, to: 4 },
      { from: 46, to: 1 },
      { from: 47, to: 42 },
      { from: 48, to: 13 },
      { from: 49, to: 31 },
      { from: 50, to: 19 }
    ]);
    // create a network
    const container = document.getElementById('network');
    const data = { nodes, edges };
    const options = {};
    const network = new Network(container, data, options);
  }
}