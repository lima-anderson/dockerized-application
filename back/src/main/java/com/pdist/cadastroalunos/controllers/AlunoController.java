package com.pdist.cadastroalunos.controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pdist.cadastroalunos.model.Aluno;
import com.pdist.cadastroalunos.repositories.AlunoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/alunos")
public class AlunoController {

	@Autowired
	AlunoRepository alunoRepository;

	@PostMapping
	public ResponseEntity<Aluno> adicionarAluno(@RequestBody @Valid Aluno aluno) {

		alunoRepository.save(aluno);

		return new ResponseEntity<>(aluno, HttpStatus.CREATED);
	}

	@GetMapping("/{idAluno}")
	public ResponseEntity<?> buscarAluno(@PathVariable Long idAluno) {
		Optional<Aluno> aluno = alunoRepository.findById(idAluno);

		if (aluno.isEmpty()) {
			return new ResponseEntity<>("Aluno não encontrado", HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<>(aluno, HttpStatus.FOUND);
	}

	@GetMapping
	public ResponseEntity<List<Aluno>> listar() {
		List<Aluno> lista = alunoRepository.findAll();
		return ResponseEntity.ok().body(lista);
	}

	@PutMapping("/{idAluno}")
	public ResponseEntity<Aluno> atualizar(@PathVariable Long idAluno, @Valid @RequestBody Aluno aluno) {

		if (!alunoRepository.existsById(idAluno)) {
			return ResponseEntity.notFound().build();
		}
		alunoRepository.save(aluno);

		return ResponseEntity.ok(aluno);
	}

	@DeleteMapping("/{idAluno}")
	public ResponseEntity<Void> excluir(@PathVariable Long idAluno) {
		if (!alunoRepository.existsById(idAluno)) {
			return ResponseEntity.notFound().build();
		}
		alunoRepository.deleteById(idAluno);

		return ResponseEntity.noContent().build();
	}
}
