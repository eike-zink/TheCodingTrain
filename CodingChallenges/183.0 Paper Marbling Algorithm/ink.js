class Drop {

	constructor(x, y, r) {
		this.center = createVector(x, y)
		this.r = r
		this.col = random(0, 254);
		this.vertices = [];

		for (let i = 0; i < 400; i++) {
			let angle = map(i, 0, 400, 0, TWO_PI);
			let v = createVector(cos(angle), sin(angle));
			v.mult(this.r);
			v.add(this.center.x, this.center.y);
			this.vertices[i] = v;
		}
	}

	show() {
		fill(this.col);
		noStroke();
		beginShape();
		for (let v of this.vertices) {
			vertex(v.x, v.y);
		}
		endShape(CLOSE);
	}


	tine(m, x, y, z, c) {
		let u = 1 / pow(2, 1/c);
		let b = createVector(x, y);

		for (let v of this.vertices) {
			let pb = p5.Vector.sub(v, b);
			let n = m.copy().rotate(HALF_PI);
			let d = abs(pb.dot(n));
			let mag = z * pow(u, d);
			v.add(m.copy().mult(mag));
		}
	}


	marble(other) {
		for (let v of this.vertices) {
			let c = other.center;
			let r = other.r;
			let p = v.copy();
			p.sub(c);
			let m = p.mag();
		    let root = sqrt(1 + (r * r) / (m * m));
		    p.mult(root);
		    p.add(c);
		    v.set(p);
		}
	}
}